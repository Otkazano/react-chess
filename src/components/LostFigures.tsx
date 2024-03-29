import React, { FC } from 'react'
import Figure from '../models/figures/Figure'

interface LostFiguresProps {
  title: string
  figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className='lost'>
      <h3>{title}</h3>
      {figures.map(figure => {
        return (
          <div key={Math.random()}>
            {figure.name}{' '}
            {figure.logo && (
              <img
                width={'20px'}
                height={'20px'}
                src={figure.logo}
                alt='logo'
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default LostFigures
