import type { EditEventById, UpdateEventInput } from 'types/graphql';

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
  SelectField,
} from '@redwoodjs/forms';
import type { RWGqlError } from '@redwoodjs/forms';

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '');
  }
};

type FormEvent = NonNullable<EditEventById['event']>;

interface EventFormProps {
  event?: EditEventById['event'];
  onSave: (data: UpdateEventInput, id?: FormEvent['id']) => void;
  error: RWGqlError;
  loading: boolean;
}

const EventForm = (props: EventFormProps) => {
  const onSubmit = (data: FormEvent) => {
    props.onSave(data, props?.event?.id);
  };

  return (
    <div className="-mt-4 text-sm">
      <Form<FormEvent> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-50 text-red-600 border border-red-100 rounded my-4"
          titleClassName="m-0 font-semibold"
          listClassName="m-0 font-semibold"
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
          defaultValue={props.event?.name}
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
          defaultValue={props.event?.description}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="description"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="timezone"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Timezone
        </Label>
        <SelectField
          name="timezone"
          defaultValue={props.event?.timezone || 'America/New_York'}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
          disabled={true}
        >
          <option>Select the timezone the event occurs in</option>
          <option value="America/New_York">America/New York</option>
        </SelectField>
        <FieldError
          name="timezone"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="startAt"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Event Starts At
        </Label>
        <DatetimeLocalField
          name="startAt"
          defaultValue={formatDatetime(props.event?.startAt)}
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
          Event Ends At
        </Label>
        <DatetimeLocalField
          name="endAt"
          defaultValue={formatDatetime(props.event?.endAt)}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="endAt"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="registrationStartAt"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Registration Starts At
        </Label>
        <DatetimeLocalField
          name="registrationStartAt"
          defaultValue={formatDatetime(props.event?.registrationStartAt)}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="registrationStartAt"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="registrationEndAt"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Registration Ends At
        </Label>
        <DatetimeLocalField
          name="registrationEndAt"
          defaultValue={formatDatetime(props.event?.registrationEndAt)}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="registrationEndAt"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="venueType"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Venue type
        </Label>
        <SelectField
          name="venueType"
          defaultValue={props.event?.venueType}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        >
          <option>Select the venue type</option>
          <option value="IN_PERSON">In Person</option>
          <option value="ONLINE">Online</option>
          <option value="HYBRID">Hybrid</option>
        </SelectField>
        <FieldError
          name="venueType"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="venueName"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Venue name
        </Label>
        <TextField
          name="venueName"
          defaultValue={props.event?.venueName}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="venueName"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="address"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.event?.address}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="address"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="country"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Country
        </Label>
        <TextField
          name="country"
          defaultValue={props.event?.country}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="country"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="city"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          City
        </Label>
        <TextField
          name="city"
          defaultValue={props.event?.city}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="city"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="stateOrProvince"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          State/Province
        </Label>
        <TextField
          name="stateOrProvince"
          defaultValue={props.event?.stateOrProvince}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="stateOrProvince"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="postalCode"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Postal Code
        </Label>
        <TextField
          name="postalCode"
          defaultValue={props.event?.postalCode}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="postalCode"
          className="mt-1 block text-xs font-semibold uppercase text-red-600"
        />

        <Label
          name="currency"
          className="mt-6 block text-left font-semibold text-gray-600"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Currency
        </Label>
        <SelectField
          name="currency"
          defaultValue={props.event?.currency || 'USD'}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
          disabled={true}
        >
          <option value="USD">US Dollar (USD)</option>
        </SelectField>
        <FieldError
          name="currency"
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
          defaultValue={props.event?.capacity}
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

export default EventForm;
