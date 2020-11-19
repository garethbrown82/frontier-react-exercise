export interface FormInstructions {
  readonly theme: Theme;
  readonly sections: ReadonlyArray<Section>;
}

interface Theme {
  readonly primary_color: string;
  readonly secondary_color: string;
  readonly background_color: string;
}

export interface Section {
  readonly id: string;
  readonly title: string;
  readonly content: ReadonlyArray<ContentItem>;
}

export type ContentItem = 
  BooleanContent
  | EmailContent
  | LocationContent
  | MonoChoiceContent
  | MultiChoiceContent
  | NumberContent
  | PhoneContent
  | TextContent
  | TextAreaContent
  | UrlContent

interface BooleanContent {
  readonly id: string;
  readonly type: Type.Boolean;
  readonly metadata: {
    readonly required: boolean;
  }
  readonly question_text: string;
}

interface EmailContent {
  readonly id: string;
  readonly type: Type.Email;
  readonly metadata: {
    readonly format: Format.Email;
    readonly pattern: string;
    readonly required: boolean;
    readonly placeholder: string;
  }
  readonly question_text: string;
}

interface LocationContent {
  readonly id: string;
  readonly type: Type.Location;
  readonly metadata: {
    readonly format: Format.Text;
    readonly required: boolean;
    readonly placeholder: string;
  }
  readonly question_text: string;
}

interface MonoChoiceContent {
  readonly id: string;
  readonly type: Type.MonoChoice;
  readonly metadata: {
    readonly options: ReadonlyArray<Option>;
    readonly required: boolean;
  }
  readonly question_text: string;
}

interface MultiChoiceContent {
  readonly id: string;
  readonly type: Type.MultiChoice;
  readonly output: ReadonlyArray<OutputItem>;
  readonly metadata: {
    readonly options: ReadonlyArray<Option>;
    readonly required: boolean;
  }
  readonly question_text: string;
}

interface NumberContent {
  readonly id: string;
  readonly type: Type.Number;
  readonly metadata: {
    readonly required: boolean;
  }
  readonly question_text: string;
}

interface PhoneContent {
  readonly id: string;
  readonly type: Type.Phone;
  readonly metadata: {
    readonly format: Format.Text;
    readonly pattern: string;
    readonly required: boolean;
    readonly maxlength: number;
    readonly placeholder: string;
  }
  readonly question_text: string;
}

interface TextContent {
  readonly id: string;
  readonly type: Type.Text;
  readonly metadata: {
    readonly format: Format.Text;
    readonly required: boolean;
  }
  readonly question_text: string;
}

interface TextAreaContent {
  readonly id: string;
  readonly type: Type.TextArea;
  readonly metadata: {
    readonly placeholder?: string;
    readonly required: boolean;
  }
  readonly question_text: string;
}

interface UrlContent {
  readonly id: string;
  readonly type: Type.Url;
  readonly metadata: {
    readonly format: Format.Url;
    readonly required: boolean;
  }
  readonly question_text: string;
}

interface Option {
  readonly label: string;
  readonly value: string;
}

interface OutputItem {
  readonly originStep: number;
}

enum Type {
  Boolean = 'boolean',
  Email = 'email',
  Location = 'location',
  MonoChoice = 'monochoice',
  MultiChoice = 'multichoice',
  Number = 'number',
  Phone = 'phone',
  Text = 'text',
  TextArea = 'textarea',
  Url = 'url',
}

enum Format {
  Text = 'text',
  Email = 'email',
  Url = 'url',
}
