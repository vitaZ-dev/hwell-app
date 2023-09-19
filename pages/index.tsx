import Header from '@/components/common/Header';
import MapScene from '@/components/home/MapScene';
import useInfo from '@/hooks/useInfo';
import { Info } from '@/types/info';
import { useEffect } from 'react';

interface IProps {
  infos: Info[];
}

export default function Home({ infos }: IProps) {
  // 위도경도에 대한 정보(json) 및 naver의 map 객체를 전역으로 참조해서 관리
  // SWR 상태관리()
  const { initializeInfos } = useInfo();

  // 최초 mount 가 되면, 즉 html 이 출력되면
  // props 를 출력해본다
  useEffect(() => {
    console.log(infos);
    initializeInfos(infos);
    // 새로운 정보가 들어온다면 다시 렌더링 해주기 위해서
  }, [initializeInfos, infos]);

  return (
    <>
      <Header />
      <MapScene />
    </>
  );
}
// pre-rendering 해서 SSG 생성
export async function getStaticProps() {
  // public 의 info.json 가져오기
  // props 전달
  const infos = (await import('@/public/info.json')).default;
  return {
    props: { infos },
    // 일정 시간이 지나면 데이터를 다시 가져와서 pre-rendering 함
    revalidate: 3600,
  };
}
