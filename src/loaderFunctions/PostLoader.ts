import PostMap from '../Data';

const loader: any = async (props: any): Promise<any> => {
  const url: URL = new URL(props.request.url);
  const parts: Array<string> = url.pathname
    .substring(1, url.pathname.length)
    .split('/');
  return { post_object: PostMap.get(parts[0]), post_url: parts[1] };
};
export default loader;
