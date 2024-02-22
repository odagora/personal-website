import type { BlogFrontmatterPage } from '@/types/IBlogFrontMatter';
import type { ProjectFrontmatterPage } from '@/types/IProjectFrontMatter';

type INewerOlderPaginationProps = {
  page: BlogFrontmatterPage | ProjectFrontmatterPage;
  resource: string;
};

export const NewerOlderPagination = (props: INewerOlderPaginationProps) => (
  <div className="flex justify-center gap-8">
    {props.page.url.prev && (
      <a href={props.page.url.prev}>← Newer {props.resource}</a>
    )}
    {props.page.url.next && (
      <a href={props.page.url.next}>Older {props.resource} →</a>
    )}
  </div>
);
