import axios from "axios";
import { PHOTOS_API_URL } from "@/const";
import { PortfolioItem } from "@/types";
import { useEffect, useState } from "react";
import Layout from "@/components/layout/layout";
import Image from 'next/image'
import styles from "../styles/portfolio.module.css";
import { useRouter } from "next/router";

type ItemsByGroup = [string, PortfolioItem[]][];

const prepareData = (data: PortfolioItem[]): ItemsByGroup => {
  const byGroup: ItemsByGroup = [
    ["Корпоративные сайты", []],
    ["CRM-системы", []],
    ["Прочие проекты", []],
  ];

  let groupIndex = 0;

  data.forEach((item) => {
    byGroup[groupIndex][1].push(item);

    if (byGroup[groupIndex][1].length === 3) {
      groupIndex++;
    }
  });

  return byGroup;
}

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);

  const { push } = useRouter();

  const load = async () => {
    try {
      const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
      const prepared = prepareData(data.slice(0, 7));
      setItems(prepared);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <Layout>
        ... loading ...
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Наши работы</h1>

      {itemsByGroup?.length ? (
        <div>
          {itemsByGroup.map((group, i) => (
            <div key={i} className={styles.groupWrapper}>
              <h2>{group[0]}</h2>

              <div className={styles.listGroup}>
                {group[1].map(({ id, title, thumbnailUrl }) => (
                  <div
                    key={id}
                    className={styles.groupItem}
                    onClick={() => push(`/portfolio/${id}`)}
                  >
                    <Image src={thumbnailUrl} width={150} height={150} alt={title} />
                    <h3>{title}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : <div>Ничего не найдено</div>}
    </Layout>
  )
}
