import './mylabel.css'

export interface PropsLabel {
    /**
  * Capitaliza las palabras si esta en true : 
  */
    allCaps?: boolean,
    /**
  * Le asigna algún color primaruo al texto
  */
    color?: 'primary' | 'secondary' | 'tertiary',
    /**
   * Este es la etiqueta que se le asignará al elemento
   */
    label: string,
    /**
   * Asigna el tamaño del elemento se cuenta con cuatro posibilidades: 
   */
    size: 'normal' | 'h1' | 'h2' | 'h3',
    /**
   * Color opcional de la fuente 
   */
    fontColor?: string,
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    fontColor,
    label = 'No label',
    size = 'normal',
}: PropsLabel) => {
    return (
        <span 
            className={`label ${size} text-${color}`}
            style={{color: fontColor}}
        >
            {(!!allCaps) ? label.toUpperCase() : label}
        </span>
    )
}
