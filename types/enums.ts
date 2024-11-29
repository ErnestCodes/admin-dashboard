export interface User {
  avatar_url: string;
  email: string;
  first_name: string;
  id: string;
  username: null;
  subscribe: boolean;
  push_token: string;
  signup_complete: boolean;
  suspended: boolean;
  bank_account: string;
  profile_moderated: boolean;
  recipient_id: string;
}

export interface Verification {
  id: string;
  user_id: string;
  displayName: string;
  selfie_url: string;
  id_url: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  created_at: string;
  updated_at?: string;
}

export type ProviderProps = {
  userId: string;
  fetchUsers: () => Promise<any>;
  fetchVerifications: () => Promise<any>;
  updateVerifications: (
    user_id: string,
    status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  ) => void;
};
