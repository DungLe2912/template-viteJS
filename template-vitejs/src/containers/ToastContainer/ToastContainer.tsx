import { ToastContainer, Slide, ToastContainerProps } from 'react-toastify'

const StyledToastContainer: React.FC<ToastContainerProps> = (props) => {
  return (
    <ToastContainer
      limit={5}
      hideProgressBar
      closeButton={false}
      transition={Slide}
      position='top-center'
      style={{
        top: '1em',
        left: '50%',
        width: '100%',
        padding: '0 1.75rem',
        transform: 'translateX(-50%)',
      }}
      toastStyle={{
        padding: 0,
        borderRadius: 0,
        margin: '0 auto',
        marginTop: '3rem',
        maxWidth: '25rem',
        minHeight: 'unset',
        backgroundColor: 'transparent',
      }}
      bodyStyle={{
        padding: 0,
      }}
      {...props}
    />
  )
}

export default StyledToastContainer
