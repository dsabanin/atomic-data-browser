import {
  classes,
  getTimestampNow,
  properties,
  Resource,
  useArray,
  useResource,
  useStore,
  useString,
  useSubject,
  useTitle,
} from '@tomic/react';
import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useHotkeys } from 'react-hotkeys-hook';
import { FaCopy, FaLink, FaPencilAlt, FaReply, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AtomicLink from '../components/AtomicLink';
import { Button } from '../components/Button';
import { CommitDetail } from '../components/CommitDetail';
import Markdown from '../components/datatypes/Markdown';
import { Detail } from '../components/Detail';
import Parent from '../components/Parent';
import { editURL } from '../helpers/navigation';
import ResourceInline, { ErrorLook } from './ResourceInline';
import { ResourcePageProps } from './ResourcePage';

/** Full page ChatRoom that shows a message list and a form to add Messages. */
export function ChatRoomPage({ resource }: ResourcePageProps) {
  const title = useTitle(resource);
  const [messages] = useArray(resource, properties.chatRoom.messages);
  const [newMessageVal, setNewMessage] = useState('');
  const store = useStore();
  const [isReplyTo, setReplyTo] = useState<string>(null);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const [textAreaHight, setTextAreaHight] = useState(1);

  useHotkeys(
    'enter',
    e => {
      e.preventDefault();
      sendMessage();
    },
    { enableOnTags: ['TEXTAREA'] },
    [],
  );
  useEffect(scrollToBottom, [messages.length, resource]);

  function scrollToBottom() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }

  const disableSend = newMessageVal.length === 0;

  /** Creates a message using the internal state */
  async function sendMessage(e?) {
    const messageBackup = newMessageVal;
    try {
      scrollToBottom();
      setNewMessage('');
      e && e.preventDefault();
      if (!disableSend) {
        const subject = store.createSubject('messages');
        const msgResource = new Resource(subject, true);
        await msgResource.set(
          properties.parent,
          resource.getSubject(),
          store,
          false,
        );
        await msgResource.set(properties.isA, [classes.message], store, false);
        await msgResource.set(
          properties.description,
          newMessageVal,
          store,
          false,
        );
        await msgResource.set(
          properties.commit.createdAt,
          getTimestampNow(),
          store,
          false,
        );
        if (isReplyTo) {
          await msgResource.set(
            properties.chatRoom.replyTo,
            isReplyTo,
            store,
            false,
          );
        }
        await msgResource.save(store);
        setReplyTo(null);
      }
    } catch (e) {
      setNewMessage(messageBackup);
      toast.error(e.message);
    }
  }

  const handleReplyCallback = React.useCallback(handleReplyTo, [inputRef]);

  function handleReplyTo(subject: string) {
    setReplyTo(subject);
    inputRef.current.focus();
  }

  function handleChangeMessageText(e) {
    setNewMessage(e.target.value);
    if (e.target.value == '') {
      // Make the textarea small again when the user removed their message
      setTextAreaHight(1);
      return;
    }
    // Auto-grow the textarea
    const height = e.target.scrollHeight;
    const rowHeight = 25;
    const trows = Math.ceil(height / rowHeight) - 1;
    if (trows !== textAreaHight) {
      setTextAreaHight(trows);
    }
  }

  return (
    <FullPageWrapper about={resource.getSubject()}>
      <Parent resource={resource} />
      <h1>{title}</h1>
      {store.webSocket.readyState == WebSocket.CLOSED && (
        <ErrorLook>Closed websocket!</ErrorLook>
      )}
      <ScrollingContent ref={scrollRef}>
        <MessagesPage
          subject={resource.getSubject()}
          setReplyTo={handleReplyCallback}
        />
      </ScrollingContent>
      {isReplyTo && (
        <Detail>
          <MessageLine subject={isReplyTo} />
          <Button icon subtle onClick={() => setReplyTo(null)}>
            <FaTimes />
          </Button>
        </Detail>
      )}
      <MessageForm onSubmit={sendMessage}>
        <MessageInput
          rows={textAreaHight}
          ref={inputRef}
          autoFocus
          value={newMessageVal}
          onChange={handleChangeMessageText}
          placeholder={'type a message'}
        />
        <SendButton
          title='Send message [enter]'
          disabled={disableSend}
          clean
          onClick={sendMessage}
        >
          Send
        </SendButton>
      </MessageForm>
      <ErrorLook>
        {'ChatRooms are currently in '}
        <a href='https://github.com/joepio/atomic-data-rust/issues/373'>
          pre-alpha
        </a>
        {". Don't use them for anything important."}
      </ErrorLook>
    </FullPageWrapper>
  );
}

type setReplyTo = (subject: string) => unknown;

interface MessageProps {
  subject: string;
  /** Is called when the `reply` button is pressed */
  setReplyTo: setReplyTo;
}

const MESSAGE_MAX_LEN = 500;

/** Single message shown in a ChatRoom */
const Message = React.memo(function Message({
  subject,
  setReplyTo,
}: MessageProps) {
  const resource = useResource(subject);
  const [description] = useString(resource, properties.description);
  const [lastCommit] = useSubject(resource, properties.commit.lastCommit);
  const [replyTo] = useSubject(resource, properties.chatRoom.replyTo);
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const shortenedDescription = description.substring(0, MESSAGE_MAX_LEN);

  function handleCopyUrl() {
    navigator.clipboard.writeText(subject);
    toast.success('Copied message URL to clipboard');
  }

  function handleCopyText() {
    navigator.clipboard.writeText(description);
    toast.success('Copied message text to clipboard');
  }

  return (
    <MessageComponent about={subject}>
      <MessageDetails>
        <CommitDetail commitSubject={lastCommit} />
        {replyTo && <MessageLine subject={replyTo} />}
        <MessageActions>
          <Button
            icon
            subtle
            onClick={() => navigate(editURL(subject))}
            title='Edit message'
          >
            <FaPencilAlt />
          </Button>
          <Button
            icon
            subtle
            onClick={() => setReplyTo(subject)}
            title='Reply to this message'
          >
            <FaReply />
          </Button>
          <Button
            icon
            subtle
            onClick={handleCopyUrl}
            title='Copy link to this message'
          >
            <FaLink />
          </Button>
          <Button
            icon
            subtle
            onClick={handleCopyText}
            title='Copy message text'
          >
            <FaCopy />
          </Button>
        </MessageActions>
      </MessageDetails>
      <Markdown
        noMargin
        text={collapsed ? shortenedDescription : description}
      />
      {description.length > MESSAGE_MAX_LEN && collapsed && (
        <Button noMargins subtle onClick={() => setCollapsed(false)}>
          {'Read more '}
        </Button>
      )}
    </MessageComponent>
  );
});

interface MessageLineProps {
  subject: string;
}

const MESSAGE_LINE_MAX_LEN = 50;

/** Small single line preview of a message, useful in replies */
function MessageLine({ subject }: MessageLineProps) {
  const resource = useResource(subject);
  const [description] = useString(resource, properties.description);
  const [lastCommit] = useSubject(resource, properties.commit.lastCommit);

  // Traverse path to find the author
  const commitResource = useResource(lastCommit);
  const [signer] = useSubject(commitResource, properties.commit.signer);

  if (!resource.isReady() || !commitResource.isReady()) {
    return <MessageLineStyled>loading...</MessageLineStyled>;
  }

  // truncate and add ellipsis
  const truncated = description.substring(0, MESSAGE_LINE_MAX_LEN);
  const ellipsis = description.length > MESSAGE_LINE_MAX_LEN ? '...' : '';

  return (
    <MessageLineStyled>
      <span>to </span>
      <ResourceInline subject={signer} />
      <AtomicLink subject={subject}>{`: ${truncated}${ellipsis}`}</AtomicLink>
    </MessageLineStyled>
  );
}

const MessageLineStyled = styled.span`
  font-size: 0.7rem;
  white-space: nowrap;
  overflow: hidden;
  flex: 1;
`;

/** Small row on top of Message for details such as date and creator */
const MessageDetails = styled.div`
  font-size: 0.7rem;
  margin-bottom: 0;
  opacity: 0.4;
  display: flex;
  flex: 1;
`;

/** Part of MessageDetails which is aligned to the right */
const MessageActions = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  flex: 1;
  opacity: 0;
  margin-right: 1rem;
`;

const MessageComponent = styled.div`
  min-height: 1.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;

  &:hover {
    background: ${p => p.theme.colors.bg};

    & ${MessageDetails} {
      opacity: 1;
    }

    & ${MessageActions} {
      opacity: 1;
    }
  }
`;

const SendButton = styled(Button)`
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${p => p.theme.colors.bg};
  background: ${p => p.theme.colors.main};

  &:disabled {
    cursor: default;
    display: auto;
    opacity: 0.5;
  }
`;

const MessageInput = styled.textarea`
  color: ${p => p.theme.colors.text};
  background: none;
  flex: 1;
  padding: 0.5rem 1rem;
  border: ${p => p.theme.colors.bg2} solid 1px;
  border-right: none;
  line-height: inherit;
  min-height: 2rem;
  max-height: 50vh;
  font-family: ${p => p.theme.fontFamily};
}
`;

/** Wrapper for the new message form */
const MessageForm = styled.form`
  display: flex;
  flex-basis: 3rem;
  flex-direction: row;
  border-radius: ${p => p.theme.radius};
  background: ${p => p.theme.colors.bg};

  > :first-child {
    border-top-left-radius: ${p => p.theme.radius};
    border-bottom-left-radius: ${p => p.theme.radius};
  }
  > :last-child {
    border-top-right-radius: ${p => p.theme.radius};
    border-bottom-right-radius: ${p => p.theme.radius};
  }
`;

const FullPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* I think this warrants a prettier solution */
  height: calc(100vh - 4rem);
  padding: 1rem;
  flex: 1;
`;

const ScrollingContent = styled.div`
  margin-left: -1rem;
  margin-right: -1rem;
  overflow-y: scroll;
  flex: 1;
`;

interface MessagesPageProps {
  subject: string;
  setReplyTo: setReplyTo;
}

/** Shows Messages for this page. Recursively fetches the next page, if in view */
function MessagesPage({ subject, setReplyTo }: MessagesPageProps) {
  const resource = useResource(subject);
  const [messages] = useArray(resource, properties.chatRoom.messages);
  const [nextPage] = useString(resource, properties.chatRoom.nextPage);
  const [inView, setInView] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // Observe if the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      console.log('entry', entry);
      console.log('entry.isIntersecting', entry.isIntersecting);
    });
    ref.current && observer.observe(ref.current);
  }, [ref]);

  if (!inView) {
    return <>Not in view...</>;
  }

  if (!resource.isReady()) {
    return <>loading...</>;
  }

  return (
    <div ref={ref}>
      {nextPage && <MessagesPage subject={nextPage} setReplyTo={setReplyTo} />}
      {messages.map(message => (
        <Message
          key={'message' + message}
          subject={message}
          setReplyTo={setReplyTo}
        />
      ))}
    </div>
  );
}