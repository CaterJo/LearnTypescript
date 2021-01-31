{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // Map 처럼 키밸류의 의미
  const nav: Record<Page, PageInfo> = {
    about: { title: ' ' },
    contact: { title: ' ' },
    home: { title: '' },
  };

  type Product = 'cat' | 'dog';
}
