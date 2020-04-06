import React from 'react';

import api from '../../services/api'
import { getUser } from '../../services/auth'

export default function Profile() {

  async function loadUser() {
    const res = await api.get(`/profile/${getUser()}`)
    console.log(res.data)
  }

  loadUser()

  return (
    <div>
    </div>
  );
}
