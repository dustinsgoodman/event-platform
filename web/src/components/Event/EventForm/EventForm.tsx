import { useTranslation } from 'react-i18next';
import type { EditEventById, UpdateEventInput } from 'types/graphql';

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  NumberField,
  TextAreaField,
  SelectField,
} from '@redwoodjs/forms';
import type { RWGqlError } from '@redwoodjs/forms';

import Button from 'src/components/Button/Button';

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
  const { t } = useTranslation();

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
          {t('Event.fields.name')}
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
          {t('Event.fields.description')}
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
          {t('Event.fields.timezone')}
        </Label>
        <SelectField
          name="timezone"
          defaultValue={props.event?.timezone || 'America/New_York'}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
          disabled={true}
        >
          <option>{t('Event.timezone.default')}</option>
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
          {t('Event.fields.startAt')}
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
          {t('Event.fields.endAt')}
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
          {t('Event.fields.registrationStartAt')}
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
          {t('Event.fields.registrationEndAt')}
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
          {t('Event.fields.venueType')}
        </Label>
        <SelectField
          name="venueType"
          defaultValue={props.event?.venueType}
          className="mt-2 block w-full rounded border border-gray-200 bg-white p-2 outline-none"
          errorClassName="block mt-2 w-full p-2 bg-white border border-gray-200 rounded outline-none border-red-600 text-red-600 focus:border-red-600 focus:text-red-600"
          validation={{ required: true }}
        >
          <option>{t('Event.venueType.default')}</option>
          <option value="IN_PERSON">{t('Event.venueType.IN_PERSON')}</option>
          <option value="ONLINE">{t('Event.venueType.ONLINE')}</option>
          <option value="HYBRID">{t('Event.venueType.HYBRID')}</option>
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
          {t('Event.fields.venueName')}
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
          {t('Event.fields.address')}
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
          {t('Event.fields.country')}
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
          {t('Event.fields.city')}
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
          {t('Event.fields.stateOrProvince')}
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
          {t('Event.fields.postalCode')}
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
          {t('Event.fields.currency')}
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
          {t('Event.fields.capacity')}
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
          <Button component="button" type="save" disabled={props.loading}>
            {t('common.save')}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EventForm;
