import { Link } from 'react-router-dom';
import './button.css';

export const Button = ({ link, children, design, mode, onclick, disabled, loading, type}) => {

    if(link){
        return(
            <Link 
                to={link}
                className={[
                    'button',
                    `button--${design}`,
                    `button--${mode}`
                  ].join(' ')}
                  onClick={onclick}
                  disabled={ disabled || loading}
                  type={ type }
                >
                { children }
            </Link>
        )
    }


  return (
    <button
        className={[
            'button',
            `button--${design}`,
            `button--${mode}`
          ].join(' ')}
          >

    </button>
  )
}
