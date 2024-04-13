import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../Utilities/axios/http';
import axios from 'axios';

export const getProfile = createAsyncThunk('user/getProfile', async (in4, {rejectWithValue}) => {
  try {
    const response = await fetch('http://206.189.45.141/api/login-admin.php', {
      method: 'POST',
      body: JSON.stringify(in4),
    });

    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.status === false){
      return rejectWithValue({ message: responseJson.message });
    } else {
      return responseJson.user;
    }
  } catch (error) {
    console.error(error);
    return rejectWithValue({ message: error.message });
  }
});
