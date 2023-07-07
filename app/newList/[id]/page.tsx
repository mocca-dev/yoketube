import { HTMLAttributes } from 'react';
import CreateListForm from '@/components/CreateListForm/CreateListForm';

interface PageProps {
  params: { id: string };
}

const NewList = async ({ params }: PageProps) => (
  <CreateListForm id={params.id} />
);

export default NewList;
