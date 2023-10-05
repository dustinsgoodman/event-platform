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
    <div className="text-sm -mt-4">
      <Form<FormEvent> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="p-4 bg-red-50 text-red-600 border border-red-100 rounded my-4"
          titleClassName="m-0 font-semibold"
          listClassName="m-0 font-semibold"
        />

        <Label
          name="name"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.event?.name}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="name"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="description"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Description
        </Label>
        <TextAreaField
          name="description"
          defaultValue={props.event?.description}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="description"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="timezone"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Timezone
        </Label>
        <SelectField
          name="timezone"
          defaultValue={props.event?.timezone || 'America/New_York'}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
          disabled={true}
        >
          <option>Select the timezone the event occurs in</option>
          <option value="America/New_York">America/New York</option>
        </SelectField>
        <FieldError
          name="timezone"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="startAt"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Event Starts At
        </Label>
        <DatetimeLocalField
          name="startAt"
          defaultValue={formatDatetime(props.event?.startAt)}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="startAt"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="endAt"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Event Ends At
        </Label>
        <DatetimeLocalField
          name="endAt"
          defaultValue={formatDatetime(props.event?.endAt)}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="endAt"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="registrationStartAt"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Registration Starts At
        </Label>
        <DatetimeLocalField
          name="registrationStartAt"
          defaultValue={formatDatetime(props.event?.registrationStartAt)}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="registrationStartAt"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="registrationEndAt"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Registration Ends At
        </Label>
        <DatetimeLocalField
          name="registrationEndAt"
          defaultValue={formatDatetime(props.event?.registrationEndAt)}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        />
        <FieldError
          name="registrationEndAt"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="venueType"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Venue type
        </Label>
        <SelectField
          name="venueType"
          defaultValue={props.event?.venueType}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
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
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="venueName"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Venue name
        </Label>
        <TextField
          name="venueName"
          defaultValue={props.event?.venueName}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="venueName"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="address"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.event?.address}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="address"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="country"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Country
        </Label>
        <TextField
          name="country"
          defaultValue={props.event?.country}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="country"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="city"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          City
        </Label>
        <TextField
          name="city"
          defaultValue={props.event?.city}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="city"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="stateOrProvince"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          State/Province
        </Label>
        <TextField
          name="stateOrProvince"
          defaultValue={props.event?.stateOrProvince}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="stateOrProvince"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="postalCode"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Postal Code
        </Label>
        <TextField
          name="postalCode"
          defaultValue={props.event?.postalCode}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="postalCode"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="currency"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Currency
        </Label>
        <SelectField
          name="currency"
          defaultValue={props.event?.currency || 'USD'}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
          disabled={true}
        >
          <option value="USD">US Dollar (USD)</option>
        </SelectField>
        <FieldError
          name="currency"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <Label
          name="capacity"
          className="block mt-6 text-gray-600 font-semibold text-left"
          errorClassName="block mt-6 text-gray-600 font-semibold text-left text-red-600"
        >
          Capacity
        </Label>
        <NumberField
          name="capacity"
          defaultValue={props.event?.capacity}
          className="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
        />
        <FieldError
          name="capacity"
          className="block mt-1 font-semibold text-xs text-red-600 uppercase"
        />

        <div className="flex my-3 mx-2 mt-8">
          <Submit
            disabled={props.loading}
            className="flex justify-center py-1 px-4 border-0 rounded bg-blue-500 text-white hover:bg-blue-700 text-xs font-semibold uppercase tracking-wide leading-loose no-underline cursor-pointer transition duration-100 mx-1"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default EventForm;
