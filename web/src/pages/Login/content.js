import { FiMail as MainIcon, FiLock as LockIcon } from 'react-icons/fi';
export default [
  {
    id: 1,
    children: 'Email',
    type: 'mail',
    icon: <MainIcon />,
    alternativeText: null,
  },
  {
    id: 2,
    children: 'Senha',
    type: 'text',
    icon: <LockIcon />,

    alternativeText: {
      name: 'Esqueci a senha',
      url: '#',
    },
  },
];
