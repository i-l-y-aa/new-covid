import React from "react";
import { Container, Card, ListGroup } from 'react-bootstrap';

const Main_publications_En = () => {
    const publications = [
        {
            year: 2024,
            items: [
                {
                    title: "O. Krivorotko, N. Zyatkov. The Forecasting of the Spread of Infectious Diseases Based on Conditional Generative Adversarial Networks.",
                    journal: "Mathematics 2024,",
                    volume: "12, 3044.",
                    link: "https://ai-biolab.ru/data/mathematics-12-03044.pdf"
                },
                {
                    title: "O. Krivorotko, S. Kabanikhin. Artificial intelligence for COVID-19 spread modeling.",
                    journal: "Journal of Inverse and Ill-Posed Problems.",
                    volume: "Vol. 32, No.2.",
                    doi: "10.1515/jiip-2024-0013",
                    link: "https://ai-biolab.ru/data/COVID_review_10.1515_jiip-2024-0013.pdf"
                },
                {
                    title: "G. Akindinov, O. Krivorotko, V. Matyukhin. Numerical solution of an inverse problem for a general hyperbolic heat equation.",
                    journal: "In: Olenev, N., Evtushenko, Y., Jacimovic, M., Khachay, M., Malkova, V. (eds) Advances in Optimization and Applications.",
                    volume: "OPTIMA 2023. Communications in Computer and Information Science, vol 1913.",
                    publisher: "Springer, Cham.",
                    year: 2024,
                    pages: "P. 47-60."
                }
            ]
        },
        {
            year: 2023,
            items: [
                {
                        title: "Krivorotko O.I., Kabanikhin S.I., Zyatkov N.Yu. Neural network modeling of COVID-19 spread taking into account socio-economic processes  Systems theory, algebraic biology, artificial intelligence: mathematical foundations and applications: Abstracts. М., 2023. С. 787-789. DOI 10.18699/sblai2023-22",
                        journal: "World Congress (June 26-30, 2023, Moscow).",
                        details: "Systems theory, algebraic biology, artificial intelligence: mathematical foundations and applications: Abstracts.",
                        pages: "P. 787-789.",
                        doi: "10.18699/sblai2023-22",
                        link: "https://ai-biolab.ru/data/COVID-19_NN_eng.pdf"
                    },
                {
                    title: "V. Petrakova, O. Krivorotko, A. Neverov. Review of the mean field models for predicting the spread of viral infections.",
                    conference: "2023 IEEE CSGB.",
                    pages: "P. 45-50.",
                    doi: "10.1109/CSGB60362.2023",
                    link: "https://ai-biolab.ru/data/Proc_Petrakova_Krivorotko_CSGB-23.pdf"
                }
            ]
        }
    ];

    return (
        <Container style={{ padding: 0, margin: 0 }}>
            {publications.map((pubYear) => (
                <div key={pubYear.year} className="my-4">
                    <h3>{pubYear.year}</h3>
                    <ListGroup as="ol" variant="flush" className="p-0 m-0">
                        {pubYear.items.map((item, index) => (
                            <ListGroup.Item as="li" key={index} className="p-0 m-0">
                                <a href={item.link} style={{ textDecoration: 'none' }}>
                                    <Card className="pubcardcol" style={{ margin: 0, padding: 0 }}>
                                        <Card.Body>
                                            <Card.Title>
                                                <h5 align='left'>{item.title}</h5>
                                            </Card.Title>
                                            <Card.Text align='left'>
                                                {item.journal && <span>{item.journal} </span>}
                                                {item.volume && <span>{item.volume} </span>}
                                                {item.pages && <span>{item.pages} </span>}
                                                {item.details && <span>{item.details} </span>}
                                                {item.conference && <span>{item.conference} </span>}
                                                {item.doi && <span>DOI: {item.doi}</span>}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            ))}
        </Container>
    );
};

export default Main_publications_En;

