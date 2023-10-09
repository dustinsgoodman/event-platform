import { type FC } from 'react';

import { createColumnHelper } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import { EventSpeakersQuery } from 'types/graphql';

import { routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { QUERY } from 'src/components/EventSpeaker/EventSpeakersCell';
import Pagination from 'src/components/Pagination/Pagination';
import Table from 'src/components/Table/Table';
import TableActionMenu from 'src/components/TableActionMenu/TableActionMenu';

const DELETE_EVENT_SPEAKER_MUTATION = gql`
  mutation DeleteEventSpeakerMutation($id: UUID!) {
    deleteEventSpeaker(id: $id) {
      id
    }
  }
`;

type EventSpeakersListProps = {
  eventSpeakers: EventSpeakersQuery['eventSpeakers'];
  eventId: string;
};

const EventSpeakers: FC<EventSpeakersListProps> = ({
  eventSpeakers,
  eventId,
}) => {
  const { t } = useTranslation();
  const [deleteEventSpeaker] = useMutation(DELETE_EVENT_SPEAKER_MUTATION, {
    onCompleted: () => {
      toast.success(t('Speaker.deleted'));
    },
    onError: (error) => {
      toast.error(error.message);
    },
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (
    id: EventSpeakersQuery['eventSpeakers']['nodes'][0]['id'],
    name: EventSpeakersQuery['eventSpeakers']['nodes'][0]['firstName']
  ) => {
    if (confirm(t('Speaker.deleteConfirmation', { name }))) {
      deleteEventSpeaker({ variables: { id } });
    }
  };

  const columnHelper =
    createColumnHelper<EventSpeakersQuery['eventSpeakers']['nodes'][0]>();
  const columns = [
    columnHelper.accessor('firstName', {
      header: () => t('Speaker.fields.firstName'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('lastName', {
      header: () => t('Speaker.fields.lastName'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('jobTitle', {
      header: () => t('Speaker.fields.jobTitle'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('company', {
      header: () => t('Speaker.fields.company'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.display({
      id: 'actions',
      cell: (info) => (
        <TableActionMenu
          entityShowRoute={routes.eventSpeaker({
            eventId: eventId,
            id: info.row.original.id,
          })}
          entityEditRoute={routes.editEventSpeaker({
            eventId: eventId,
            id: info.row.original.id,
          })}
          entityDeleteFn={() =>
            onDeleteClick(info.row.original.id, info.row.original.fullName)
          }
        />
      ),
    }),
  ];

  return (
    <>
      <Table<EventSpeakersQuery['eventSpeakers']['nodes'][0]>
        columns={columns}
        data={eventSpeakers.nodes}
      />
      <Pagination
        route={routes.eventSpeakers}
        paginationInfo={eventSpeakers.pagination}
      />
    </>
  );
};

export default EventSpeakers;
