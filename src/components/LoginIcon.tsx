import { UserLoginIcon } from '../icons/icons'

export const LoginIcon: React.FC = () => {
  return (
    <>
      <input className='login-input-icon' id='login-icon-input' type='checkbox' />
      <label className='login-icon' htmlFor='login-icon-input'>
        <UserLoginIcon />
      </label>
    </>
  )
}
