import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProfile = createAsyncThunk('user/getProfile', async (in4, thunk) => {
  try {
    return await mockUser(in4);
  } catch (error) {
    return thunk.rejectWithValue(error);
  }
});

async function mockUser(in4) {
  new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    id: '',
    avatar: require('../../assets/images/avartaProfile.png'),
    name: 'Quoc Tri',
    gender: 'mail',
    phone: '0372711935',
    birthday: '21-2-2003',
    email: 'quoctri@gmail.com',
    password: '123',
  };
}
