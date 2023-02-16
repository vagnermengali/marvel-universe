              <>
                        <img alt={selectedHero.name} src={`${selectedHero.thumbnail.path}.${selectedHero.thumbnail.extension}`} style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
                        <Title level={3} style={{ textAlign: 'center', color: '#e62429', margin: '0 0 10px 0' }}>{selectedHero.name}</Title>
                        <Title level={5} style={{ color: '#191919' }}>Descripition</Title>
                        <Text>{selectedHero.description || 'No description available.'}</Text>
                        <Title level={5} style={{ color: '#191919' }}>Comics</Title>
                        <List
                            bordered
                            dataSource={selectedHero.comics.items}
                            renderItem={(item) => (
                                <List.Item>
                                    <Link href={`${item.resourceURI}?ts=${ts}&apikey=${publicKey}&hash=${hash}`} target="_blank">
                                        {item.name || 'No comics available.'}
                                    </Link>
                                </List.Item>
                            )}
                        />
                          <Title level={5} style={{ color: '#191919' }}>Stories</Title>
                        <List
                            bordered
                            dataSource={selectedHero.stories.items}
                            renderItem={(item) => (
                                <List.Item>
                                    <Link href={`${item.resourceURI}?ts=${ts}&apikey=${publicKey}&hash=${hash}`} target="_blank">
                                        {item.name || 'No stories available.'}
                                    </Link>
                                </List.Item>
                            )}
                        />
                          <Title level={5} style={{ color: '#191919' }}>Series</Title>
                        <List
                            bordered
                            dataSource={selectedHero.series.items}
                            renderItem={(item) => (
                                <List.Item>
                                    <Link href={`${item.resourceURI}?ts=${ts}&apikey=${publicKey}&hash=${hash}`} target="_blank">
                                        {item.name || 'No series available.'}
                                    </Link>
                                </List.Item>
                            )}
                        />
                          <Title level={5} style={{ color: '#191919' }}>Events</Title>
                        <List
                            bordered
                            dataSource={selectedHero.events.items}
                            renderItem={(item) => (
                                <List.Item>
                                    <Link href={`${item.resourceURI}?ts=${ts}&apikey=${publicKey}&hash=${hash}`} target="_blank">
                                        {item.name || 'No events available.'}
                                    </Link>
                                </List.Item>
                            )}
                        />
                    </>
                )}
            </Modal>
        </>
    );
}

export default CardList;




/*     useEffect(() => {
        setLoading(true);
        const offset = (currentPage - 1) * limit;
        ApiMarvel.get(`/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${offset}`)
          .then((res) => {
            setHeroes(res.data.data.results);
          })
        setLoading(false);
      }, [currentPage]); */