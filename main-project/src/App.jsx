import { useState } from 'react';
import {
  CustomButton,
  UserInfo,
  ImageBox,
  PreferencesList,
} from '../components';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserInfo birthDate='08/05/2004' name='Marco Segato' />

      <CustomButton
        label='Modifica'
        size='big'
        variant='outlined'
        color='#fff'
      />
      <CustomButton
        label='Save'
        size='small'
        variant='contained'
        color='primary'
      />
      <CustomButton
        label='Delete'
        size='default'
        variant='contained'
        color='error'
      />
      <ImageBox src='./react.svg' />
      <PreferencesList
        label='Preferenze'
        preferences={['preferenza 1', 'preferenza 2', 'preferenza 3']}
      />
    </>
  );
}

export default App;
