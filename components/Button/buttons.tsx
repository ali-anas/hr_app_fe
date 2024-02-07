import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import { deleteInvoice } from '@/app/lib/actions';

export function CreateCandidate() {
  return (
    
    <Link
      href="/candidate/create"
    >
      <div className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer">
        <span className="hidden md:block">Create Candidate</span>{' '}
        <PlusIcon className="h-5 md:ml-4" />
      </div>
    </Link>
  );
}

export function UpdateCandidate({ id }: { id: string }) {
  return (
    // <div className="rounded-md border p-2 hover:bg-gray-100 cursor-pointer" role='button'>
      <PencilIcon className="w-5" />
    // </div>
  );
}