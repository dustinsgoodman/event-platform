import type {
  EditEventSessionById,
  UpdateEventSessionInput,
} from 'types/graphql';

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  Submit,
  TextAreaField,
  HiddenField,
} from '@redwoodjs/forms';
import type { RWGqlError } from '@redwoodjs/forms';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

type FormEvent = NonNullable<EditEventSessionById['eventSession']>;

interface EventSessionFormProps {
  eventId: EditEventSessionById['eventSession']['eventId'];
  eventSession?: EditEventSessionById['eventSession'];
  onSave: (data: UpdateEventSessionInput, id?: FormEvent['id']) => void;
  error: RWGqlError;
  loading: boolean;
}

const EventSessionForm = (props: EventSessionFormProps) => {
  const onSubmit = (data: FormEvent) => {
    props.onSave(data, props?.eventSession?.id);
  };

  return (
    <div className="-mt-4 px-4 text-sm">
      <Form<FormEvent> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-50 text-red-600 border border-red-100 rounded my-4"
          titleClassName="m-0 font-semibold"
          listClassName="m-0 font-semibold"
        />

        <HiddenField
          name="eventId"
          defaultValue={props.eventId || props.eventSession.eventId}
          validation={{ required: true }}
        />

        <Label
          name="name"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.eventSession?.name}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="name"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="description"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Description
        </Label>
        <TextAreaField
          name="description"
          defaultValue={props.eventSession?.description}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="description"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="startAt"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Session Starts At
        </Label>
        <DatetimeLocalField
          name="startAt"
          defaultValue={formatDatetime(props.eventSession?.startAt)}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="startAt"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="endAt"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Session Ends At
        </Label>
        <DatetimeLocalField
          name="endAt"
          defaultValue={formatDatetime(props.eventSession?.endAt)}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="endAt"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="capacity"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Capacity
        </Label>
        <NumberField
          name="capacity"
          defaultValue={props.eventSession?.capacity}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="capacity"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <div className="mx-2 my-3 mt-8 flex">
          <Submit
            disabled={props.loading}
            className="mx-1 flex cursor-pointer justify-center rounded border-0 bg-blue-500 px-4 py-1 text-xs font-semibold uppercase leading-loose tracking-wide text-white no-underline transition duration-100 hover:bg-blue-700"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default EventSessionForm;
