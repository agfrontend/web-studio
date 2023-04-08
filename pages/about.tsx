import Layout from "@/components/layout/layout";
import styles from "@/styles/about.module.css";
import Image from "next/image";
import _Kz8nHVg_tGI from "../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg";
import _g1Kr4Ozfoac from "../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg";
import _5fNmWej4tAA from "../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg";

export default function About() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>О компании</h1>
        <div>
          <p>
            Вот вам яркий пример современных тенденций — реализация намеченных плановых заданий однозначно определяет каждого участника как способного принимать собственные решения касаемо системы обучения кадров, соответствующей насущным потребностям. Как принято считать, независимые организации учтены.
          </p>
          <p>
            Мы вынуждены отталкиваться от того, что сложившаяся структура организации требует анализа дальнейших направлений развития! Картельные сговоры не допускают ситуации, при которой независимые государства неоднозначны и будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Мы вынуждены отталкиваться от того, что реализация намеченных плановых заданий позволяет выполнить важные задания по разработке вывода текущих активов. Прежде всего, укрепление и развитие внутренней структуры напрямую зависит от форм воздействия. А ещё акционеры крупнейших компаний неоднозначны и будут ассоциативно распределены по отраслям.
          </p>
        </div>

        <h2>Наш коллектив</h2>
        <div className={styles.list}>
          <div className={styles.item}>
            <h3>Отдел маркетинга</h3>
            <div className={styles.content}>
              <Image
                className={styles.image}
                src={_Kz8nHVg_tGI}
                alt="https://unsplash.com/photos/Kz8nHVg_tGI"
              />
              <div>
                Повседневная практика показывает, что укрепление и развитие внутренней структуры не даёт нам иного выбора, кроме определения модели развития. Предварительные выводы неутешительны: современная методология разработки, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для вывода текущих активов.
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <h3>Инженеры-разработчики</h3>
            <div className={styles.content}>
              <Image
                className={styles.image}
                src={_g1Kr4Ozfoac}
                alt="https://unsplash.com/photos/g1Kr4Ozfoac"
              />
              <div>
                В рамках спецификации современных стандартов, представители современных социальных резервов набирают популярность среди определенных слоев населения, а значит, должны быть в равной степени предоставлены сами себе.
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <h3>Отдел продаж</h3>
            <div className={styles.content}>
              <Image
                className={styles.image}
                src={_5fNmWej4tAA}
                alt="https://unsplash.com/photos/5fNmWej4tAA"
              />
              <div>
                Следует отметить, что социально-экономическое развитие является качественно новой ступенью системы обучения кадров, соответствующей насущным потребностям.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}