import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useArray,
  useResource,
  useStore,
  useString,
  Resource,
  classes,
  properties,
  urls,
} from '@tomic/react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { FaCaretDown, FaCaretRight, FaPlus } from 'react-icons/fa';

import { openURL } from '../../helpers/navigation';
import { Button } from '../Button';
import ResourceField from './ResourceField';
import { ErrMessage } from './InputStyles';
import { ResourceSelector } from './ResourceSelector';
import Field from './Field';
import UploadForm from './UploadForm';

type ResourceFormProps = {
  /**
   * The type / isA Class of a resource determines the recommended and required
   * form fields.
   */
  classSubject?: string;
  /** The parent of the new resource, used for authorization checks and navigation. */
  parent?: string;
  /** Resource that is to be either changed or created */
  resource: Resource;
};

/** Form for editing and creating a Resource */
export function ResourceForm({
  classSubject,
  resource: resourceIn,
  parent,
}: ResourceFormProps): JSX.Element {
  const resource = useResource(resourceIn.getSubject());
  const [isAArray] = useArray(resource, properties.isA);
  if (classSubject == undefined && isAArray?.length > 0) {
    // This is not entirely accurate, as Atomic Data supports having multiple
    // classes for a single resource.
    classSubject = isAArray[0];
  }
  const klass = useResource(classSubject);
  const store = useStore();
  const [requires] = useArray(klass, properties.requires);
  const [recommends] = useArray(klass, properties.recommends);
  const [klassIsa] = useString(klass, properties.isA);
  const [err, setErr] = useState<Error>(null);
  const [newPropErr, setNewPropErr] = useState<Error>(null);
  const [saving, setSaving] = useState(false);
  const history = useHistory();
  const [newProperty, setNewProperty] = useState<string>(null);
  /** A list of custom properties, set by the User while editing this form */
  const [tempOtherProps, setTempOtherProps] = useState<string[]>([]);
  const [otherProps, setOtherProps] = useState<string[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  // const { agent } = useSettings();
  // const debouncedResource = useDebounce(resource, 5000);
  // const [canWrite, canWriteErr] = useCanWrite(
  //   debouncedResource,
  //   agent?.subject,
  // );
  const [, setResourceParent] = useString(resource, properties.parent);

  // Sets agent warning / eror
  // Currently not reliable
  // https://github.com/joepio/atomic-data-browser/issues/71
  // useEffect(() => {
  //   if (canWrite == false) {
  //     setErr(new Error(`Cannot save: ${canWriteErr}.`));
  //     // TODO: This is being reset too often, which sucks
  //     // setDisabled(true);
  //   } else {
  //     setErr(null);
  //   }
  // }, [canWrite, canWriteErr, agent]);

  // Sets the parent
  useEffect(() => {
    if (parent) {
      setResourceParent(parent);
    }
  }, [parent, resource]);

  /** Builds otherProps */
  useEffect(() => {
    let prps = [];
    const allProps = Array.from(resource.getPropVals().keys());
    // If a property does not exist in requires or recommends, add it to otherprops
    for (const prop of allProps) {
      const propIsNotRenderedYet = !(
        requires.includes(prop) || recommends.includes(prop)
      );
      if (propIsNotRenderedYet) {
        prps.push(prop);
      }
    }
    // The `is-a` property is not very useful in most cases, only show it if explicitly set
    prps = prps.filter(prop => prop !== properties.isA);
    prps = prps.filter(prop => prop !== properties.parent);
    prps = prps.filter(prop => prop !== properties.read);
    prps = prps.filter(prop => prop !== properties.write);
    setOtherProps(prps.concat(tempOtherProps));
    // I actually want to run this useEffect every time the requires / recommends
    // array changes, but that leads to a weird loop, so that's what the length is for
  }, [resource, tempOtherProps, requires.length, recommends.length]);

  if (!resource.new && resource.loading) {
    return <>Loading resource...</>;
  }
  if (resource.error) {
    return <ErrMessage>{resource.getError().message}</ErrMessage>;
  }
  if (klass.loading) {
    return <>Loading class...</>;
  }
  if (klassIsa && klassIsa !== classes.class) {
    return (
      <ErrMessage>
        {classSubject} is not a Class. Only resources with valid classes can be
        created or edited at this moment.
      </ErrMessage>
    );
  }

  async function save(e) {
    e.preventDefault();
    setSaving(true);
    setErr(null);
    try {
      await resource.save(store);
      setSaving(false);
      history.push(openURL(resource.getSubject()));
      toast.success('Resource saved');
    } catch (e) {
      setErr(e);
      setSaving(false);
      toast.error('Could not save resource');
    }
  }

  function handleAddProp() {
    setNewPropErr(null);
    if (
      tempOtherProps.includes(newProperty) ||
      requires.includes(newProperty) ||
      recommends.includes(newProperty)
    ) {
      setNewPropErr(
        new Error(
          'That property already exists in this resource. It can only be added once.',
        ),
      );
    } else {
      setTempOtherProps(tempOtherProps.concat(newProperty));
    }
    setNewProperty(null);
  }

  function handleDelete(propertyURL: string) {
    resource.removePropVal(propertyURL);
    setTempOtherProps(tempOtherProps.filter(prop => prop != propertyURL));
  }

  return (
    <form about={resource.getSubject()}>
      {klass.error && (
        <ErrMessage>
          Error in class. {klass.getError().message}. You can still edit the
          resource, though.
        </ErrMessage>
      )}
      {requires.map(property => {
        return (
          <ResourceField
            key={property + ' field'}
            propertyURL={property}
            resource={resource}
            required
          />
        );
      })}
      {recommends.map(property => {
        return (
          <ResourceField
            key={property + ' field'}
            propertyURL={property}
            resource={resource}
          />
        );
      })}
      {otherProps.map(property => {
        return (
          <ResourceField
            key={property + ' field'}
            propertyURL={property}
            resource={resource}
            handleDelete={() => handleDelete(property)}
          />
        );
      })}
      <Field
        label='add another property...'
        helper='In Atomic Data, any Resource could have any single Property. Use this field to add new property-value combinations to your resource.'
      >
        <PropertyAdder>
          {/* TODO: When adding a property, clear the form. Make the button optional / remove it. */}
          <Button
            subtle
            disabled={!newProperty}
            onClick={handleAddProp}
            title='Add this property'
          >
            <FaPlus />
          </Button>
          <ResourceSelector
            value={null}
            setSubject={(set, _setNewPropErr) => {
              setNewProperty(set);
            }}
            // TODO error handling
            error={newPropErr}
            setError={setNewPropErr}
            classType={urls.classes.property}
          />
        </PropertyAdder>
      </Field>
      <UploadForm parentResource={resource} />
      <Button
        title={'show / hide advanced form fields'}
        clean
        style={{ display: 'flex', marginBottom: '1rem', alignItems: 'center' }}
        onClick={() => setShowAdvanced(!showAdvanced)}
      >
        <strong>
          advanced options {showAdvanced ? <FaCaretDown /> : <FaCaretRight />}
        </strong>
      </Button>
      {showAdvanced && (
        <>
          <ResourceField propertyURL={properties.isA} resource={resource} />
          <ResourceField propertyURL={properties.parent} resource={resource} />
          <ResourceField propertyURL={properties.write} resource={resource} />
          <ResourceField propertyURL={properties.read} resource={resource} />
        </>
      )}
      {err && <ErrMessage>{err.message}</ErrMessage>}
      <Button onClick={save} disabled={saving} data-test='save'>
        {saving ? 'wait...' : 'save'}
      </Button>
    </form>
  );
}

const PropertyAdder = styled.div`
  display: flex;
  flex-direction: row;
`;
