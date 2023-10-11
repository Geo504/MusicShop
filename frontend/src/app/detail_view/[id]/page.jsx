import DetailView from '@/components/DetailView/DetailView';

export default function Detail({params}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden">
      <DetailView id={params.id} />
    </main>
  )
}
