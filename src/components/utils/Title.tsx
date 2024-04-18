
import { Icon } from '@iconify/react/dist/iconify.js'
 
import clsx from 'clsx'

interface Props {
  icon?: string
  title: string
  description: string
  className?: string
}

export default function Title({ icon = 'line-md:compass-twotone-loop', title, description, className }: Props) {
  return (
    <div className={clsx(className, '')}>
      <div className={'bg-primary w-10 h-10 rounded-full flex items-center justify-center'}>
        <Icon icon={icon}  className='size-7'/>
      </div>
      <div className={'sm:text-3xl text-2xl font-bold mt-2'}>{title}</div>
      <div className={'sm:text-3xl text-2xl text-primary first-letter:uppercase font-extrabold '}>{description}</div>
    </div>
  )
}