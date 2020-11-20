import { TextContentComponent } from './TextContentComponent';
import Enzyme, { shallow } from 'enzyme';
import { Format, TextContent, Type } from '../../data/formInstructionsInterface';
import { ContentItemState } from '../../state/stateInterface';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('TextContentComponent', () => {
  const contentId = 'test-id';

    const contentItem: TextContent = {
      id: contentId,
      type: Type.Text,
      metadata: {
        format: Format.Text,
        required: true,
      },
      question_text: 'test question text',
    };

    const contentItemState: ContentItemState = {
      id: contentId,
      value: 'test-value',
      isValid: true,
    };

    const mockDispatch = jest.fn();

    const sectionId = 'test-section-id';

    const wrapper = shallow(
      <TextContentComponent
        textContent={contentItem}
        dispatch={mockDispatch}
        contentItemState={contentItemState}
        sectionId={sectionId}
      />,
    );

  it('displays label text', () => {
    expect(wrapper.html().includes('test question text')).toBe(true);
  });

  it('contains a text input element', () => {
    expect(wrapper.html().includes('<input type="text"')).toBe(true);
  });

  it('has the correct value', () => {
    console.log(wrapper.html());
    expect(wrapper.html().includes('value="test-value"')).toBe(true);
  });
});
