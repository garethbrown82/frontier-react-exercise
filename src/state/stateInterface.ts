export interface State {
  userDetails: UserDetailsState;
}

interface UserDetailsState {
  sections: SectionState[];
}

export interface SectionState {
  id: string;
  content: ContentItemState[];
}

export interface ContentItemState {
  id: string;
  value: string | boolean | number;
  isValid: boolean;
}
