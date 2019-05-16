interface SiteMetadataProfiles {
  stackoverflow: string;
  twitter: string;
  linkedin: string;
  github: string;
  facebook: string;
  googlePlus: string;
}

interface SiteMetadataNicknames {
  twitter: string;
}

interface SiteMetadata {
  title: string;
  description: string;
  speciality: string;
  siteUrl: string;
  repositoryUrl: string;
  postsPerPage: number;
  author: string;
  profiles: SiteMetadataProfiles;
  nicknames: SiteMetadataNicknames;
}