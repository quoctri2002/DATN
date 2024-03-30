import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMyPetList = createAsyncThunk('myPets/getMyPetList', async (_, thunk) => {
  try {
    const ListDogsData = [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Foc soc',
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'poodle',
      },
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'corki',
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'pug',
      },
    ];
    return ListDogsData;
  } catch (error) {
    return thunk.rejectWithValue(error);
  }
});
