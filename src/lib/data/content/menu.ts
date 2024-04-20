export interface MenuLinkInterface {
    id: string
    text: string
    icon: string
  }
  
  export const MENU_LINKS: MenuLinkInterface[] = [
    { id: 'summary', text: 'Summary', icon: 'line-md:roundabout-right' },
    { id: 'skills', text: 'Skills', icon: 'line-md:lightbulb' },
    {
      id: 'experiences',
      text: 'Work Experience',
      icon: 'line-md:briefcase',
    },
  
    { id: 'educations', text: 'Education', icon: 'ci:book-open' },
    { id: 'languages', text: 'Languages', icon: 'ci:planet' },
    { id: 'coffee', text: 'Coffee', icon: 'line-md:buy-me-a-coffee-twotone' },
  ]