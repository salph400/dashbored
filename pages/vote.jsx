import { useRouter } from 'next/router';

export default function vote() {
  const router = useRouter();

  return null;
}

export async function getServerSideProps({ res }) {
  res.writeHead(302, { Location: 'https://top.gg/servers/1027544757037187163/vote' });
  res.end();

  return {
    props: {},
  };
}
