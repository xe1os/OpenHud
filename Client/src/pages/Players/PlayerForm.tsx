import { Container, Typography } from '@mui/material'

export const PlayerForm = () => {
  return (
    <Container maxWidth="sm" fixed>
        <form id='playerForm' className='text-textcolor bg-background rounded p-4 flex flex-col justify-between'>
        <Typography variant='h2'>Add Player</Typography>
        <div className="flex">
            <div className="p-4 flex flex-col justify-evenly w-1/2">
                <FormInput label='Alias' type='text' name='alias' id='alias' placeholder='s1mple'/>
                <FormInput label='Real Name' type='text' name='real_name' id='real_name' placeholder='John Doe'/>
                <FormInput label='Steam ID' type='text' name='steamid' id='steamid' placeholder='76561197960287930'/>
                <FormInput label='Team' type='text' name='team' id='team' placeholder='Liquid'/>
            </div>

            <div className="p-4 flex flex-col justify-evenly w-1/2">
                <div className="w-full h-3/4 flex flex-col gap-x-3">
                    <svg className="text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>
                    <button type="button" className="rounded bg-button px-2 py-1.5 text-sm font-semibold shadow hover:bg-border">Upload</button>
                </div>
                
            </div>

        </div>
        <div className="mt-6 flex items-center justify-start gap-x-6">
                {/* <button type="button" className="text-sm font-semibold leading-6">Cancel</button> */}
                <button type="submit" className="rounded bg-button px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
        </div>
        </form>
    </Container>

  )
}


export const FormInput = ({label, type, name, id, placeholder}: FormInputProps) => {
    return (
        <div className="my-2">
            <label htmlFor={id} className="block text-sm font-medium leading-6">{label}</label>
            <div className="mt-2">
                <div className="flex">
                <input type={type} name={name} id={id} autoComplete={name} placeholder={placeholder} className="flex rounded shadow bg-stone-700 py-1.5 pl-1  placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
                </div>
            </div>
        </div>
    )
}

export interface FormInputProps {
    label: string;
    type: string;
    name: string;
    id: string;
    placeholder: string;
}
