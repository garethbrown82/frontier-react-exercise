export interface State {
  userDetails: UserDetailsState;
}

interface UserDetailsState {
  sections: SectionState[];
}

export interface SectionState {
  id: string;
  content: ContentItem[];
}

export interface ContentItem {
  id: string;
  value: string | boolean | number;
  isValid: boolean;
}
