import React from 'react';
import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

type EmailProps = {
    message: string,
    name: string,
    email: string
}

export default function QuizzaraEmail({
    message, name, email
}: EmailProps){
    return(
        <Html>
          <Head />
          <Preview>
            New Message from your website
          </Preview>
          <Body style={main}>
            <Container>
                <Section>
                    <Text style={paragraph}>From: {name}</Text>
                    <Text style={paragraph && bg}>Message:<br/>{message}</Text>
                    <Text style={sm_paragraph}>The sender's email: {email} </Text>
                </Section>
                <Hr style={hr} />
                <Text style={footer}>
                    10010 New York, New York
                </Text>
            </Container>
          </Body>
        </Html>
    )
} 

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",

};
const main = {
    backgroundColor: "#f5f5f5",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    padding: "10px"
};
const paragraph = {
    fontSize: "14px",
    lineHeight: "26px"
};
const sm_paragraph = {
    fontSize: "12px",
    lineHeight: "26px"
};
const bg = {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "25px",
    margin: "10px"
};