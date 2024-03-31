export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  gender: 'male' | 'female' | 'other';
  bio: string;
  score: number;
  location: Location;
  dob: string;
  photos: Photos[];
  interests: Interests[];
  created_at: string;
}

interface Location {
  city: string;
  country: string;
}

interface Photos {
  id: number;
  path: string;
}

export interface Interests {
  id: number;
  name: string;
}
