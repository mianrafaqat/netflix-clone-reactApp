import React from "react";
import { Container, Row, Column, Link, Title, Text, Break } from "../footer/styles/footer";
export default function Footer({children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

Footer.Row = function footerRow({children, ...restProps}) {
    return <Row {...restProps}> {children} </Row>
}

Footer.Column = function footerColumn({children, ...restProps}) {
    return <Column {...restProps}> {children} </Column>
}

Footer.Link = function footerLink({children, ...restProps}) {
    return <Link {...restProps}> {children} </Link>
}

Footer.Title = function footerTitle({children, ...restProps}) {
    return <Title {...restProps}> {children} </Title>
}

Footer.Text = function footerText({children, ...restProps}) {
    return <Text {...restProps}> {children} </Text>
}

Footer.Break = function footerBreak({children, ...restProps}) {
    return <Break {...restProps}> {children} </Break>
}