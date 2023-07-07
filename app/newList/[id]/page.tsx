import CreateListForm from '@/components/CreateListForm/CreateListForm';

export default async function NewList({ params }) {
  return <CreateListForm id={params.id} />;
}
