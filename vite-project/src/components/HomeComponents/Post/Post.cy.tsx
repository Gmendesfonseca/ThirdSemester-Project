import { Post } from './Post';

describe('<Post />', () => {
  const mockData = {
    creatorId: 1,
    likes: 0,
    title: 'Test Title',
    subheader: 'Test Subheader',
    comments: [],
    image: 'test-image.jpg',
    description: 'Test Description',
  };

  it('renders a post', () => {
    cy.mount(<Post data={mockData} />);
  });
});
