import React from "react";
import faqsData from '../fixtures/faqs.json'
import { Accordion } from "../components";
import OptForm from "../components/opt-form";

export const FaqsContainer = () => {
    return(
        <Accordion>
            <Accordion.Title>Frequently Asked Qustions</Accordion.Title>
            {faqsData.map((item)=> (
                <Accordion.Item key={item.id}>
                    <Accordion.Header> {item.header} </Accordion.Header>
                    <Accordion.Body> {item.body} </Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />

            <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership</OptForm.Text>
            </OptForm>
        </Accordion>
    )
}