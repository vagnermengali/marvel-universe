import { Descriptions, Typography, List, Spin, Button } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Hero } from '../../context/interfaceContext';
import { Context as ContextUser } from "../../context/userContext";
import ApiMarvel from '../../services/apiMarvel';

const HeroDetails = () => {
      const { ts, publicKey, hash, navigate } = useContext(ContextUser);
      const [hero, setHero] = useState<Hero | null>(null);
      const { characterId } = useParams();
      const { Title } = Typography;
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            setLoading(true);
            ApiMarvel.get(`/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
                  .then((res) => {
                        const results = res.data.data.results || [];
                        console.log(res)
                        if (results.length > 0) {
                              setHero(results[0]);
                        } else {
                              setHero(null);
                        }
                  })
                  .catch((error) => {
                        console.error(error);
                        setHero(null);
                  })
                  .finally(() => {
                        setLoading(false);
                  });
      }, [characterId, ts, publicKey, hash]);

      if (loading) {
            return <Spin />;
      }

      return (
            <div style={{ width: '100%' }}>
                  <Button type="primary" onClick={() => navigate('/account')} style={{ position: 'absolute', right: '50px' }}>
                        Voltar
                  </Button>
                  {hero && (
                        <>
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <Title level={3} style={{ textAlign: 'center', color: '#e62429', margin: '0 0 30px 0' }}>{hero.name}</Title>
                                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} style={{ width: '500px', height: '450px' }} />
                              </div>

                              <Descriptions bordered style={{ margin: '20px 0 0 0 ' }}>
                                    <Descriptions.Item label="Description" span={3}>
                                          {hero.description || "No description available."}
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Series" span={3}>
                                          <List
                                                dataSource={hero.series.items}
                                                renderItem={(item) => (
                                                      <List.Item>
                                                            <Typography.Text>{item.name || "No serie available."}</Typography.Text>
                                                      </List.Item>
                                                )}
                                          />
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Comics" span={3}>
                                          <List
                                                dataSource={hero.comics.items}
                                                renderItem={(item) => (
                                                      <List.Item>
                                                            <Typography.Text>{item.name || "No comic available."}</Typography.Text>
                                                      </List.Item>
                                                )}
                                          />
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Stories" span={3}>
                                          <List
                                                dataSource={hero.stories.items}
                                                renderItem={(item) => (
                                                      <List.Item>
                                                            <Typography.Text>{item.name || "No storie available."}</Typography.Text>
                                                      </List.Item>
                                                )}
                                          />
                                    </Descriptions.Item>
                                    <Descriptions.Item label="Events" span={3}>
                                          <List
                                                dataSource={hero.events.items}
                                                renderItem={(item) => (
                                                      <List.Item>
                                                            <Typography.Text>{item.name || "No event available."}</Typography.Text>
                                                      </List.Item>
                                                )}
                                          />
                                    </Descriptions.Item>
                              </Descriptions>
                        </>
                  )}
                  {!hero && <Typography.Text>Character not found.</Typography.Text>}
            </div>
      );
};

export default HeroDetails;