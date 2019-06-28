import * as React from 'react';

import styles from './index.module.scss';

import ShareGroupVertical from 'components/Pages/Post/Share/Group/Vertical';
import { TO_POST } from 'routes/path';

interface PostLeftSidebarProps {
  siteUrl: string;
  post: Post;
  showShareButtons: boolean;
}

export default function PostLeftSidebar({ siteUrl, post, showShareButtons }: PostLeftSidebarProps) {
  const postUrl = siteUrl + TO_POST({ slug: post.slug });
  return (
    <div className={styles.leftSidebar}>
      <ShareGroupVertical url={postUrl} text={post.title} tags={post.tags} show={showShareButtons} />
    </div>
  );
}
