import Link from 'next/link';

export default function Page404() {
  return (
    <div>
      <h1>К сожалению, такой страницы не существует</h1>
      <div>
        Вы можете перейти на <Link href="/">главную страницу</Link>,
        или оставить свой комментарий на <Link href="/contacts">странице контактов</Link>.
      </div>

      <div>Страница контактов компании</div>
    </div>
  );
}