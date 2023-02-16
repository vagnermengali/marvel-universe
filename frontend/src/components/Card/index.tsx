import { Card, Row, Col, Skeleton } from 'antd';
import { useContext } from "react";
import { Hero } from '../../context/interfaceContext';
import { Context as ContextUser } from "../../context/userContext";

function CardList() {
    const { heroes, loading, navigate } = useContext(ContextUser);

    const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 89, 10, 11, 12];

    return (
        <>
            {loading ? (
                <Row gutter={[10, 10]}>
                    {skeleton.map((index) => {
                        return (
                            <Col key={index} xs={24} sm={12} md={8} lg={4}>
                                <Card
                                    cover={
                                        <Skeleton.Image active={true} style={{ width: '231px',height: '200px'  }} />
                                    }
                                    style={{ width: '231px', height: '265px' }}>
                                    <Skeleton.Input active={true}  style={{ width: '180px'}}/>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            ) : (
                <Row gutter={[10, 10]}>
                    {heroes.map((data: Hero) => (
                        <Col key={data.id} xs={24} sm={12} md={8} lg={4}>
                            <Card
                                hoverable
                                onClick={() => {
                                    navigate(`/account/character/${data.id}`)
                                }}
                                cover={
                                    <img alt={data.name} src={`${data.thumbnail.path}.${data.thumbnail.extension}`} style={{ width: '100%', height: '200px' }} />
                                }
                                style={{ width: '100%', minHeight: '100%' }}>
                                <Card.Meta title={data.name} description={''} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </>
    );
}

export default CardList; 