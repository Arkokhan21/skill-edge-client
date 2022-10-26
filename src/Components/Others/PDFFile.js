import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
        lineHeight: 1.6,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "black",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const PDFFile = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed>
                    Skill Edge Courses
                </Text>
                <Text style={styles.text}>
                    JavaScript: JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This Course will teach you JavaScript from basic to advanced.
                    React: React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components. This Course will teach you React from basic to advanced
                    Bootstrap: Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. Bootstrap is completely free to download and use!
                    Tailwind: Tailwind CSS is basically a Utility first CSS framework for building rapid custom UI. It is a highly customizable, low-level CSS framework that gives you all of the building blocks that you need. Also, it is a cool way to write inline styling and achieve an awesome interface without writing a single line of your own CSS
                    Firebase: Firebase is a backend platform for building Web, Android and IOS applications. It offers real time database, different APIs, multiple authentication types and hosting platform.
                    Node.js: Node.js is an open source server environment. Node.js allows you to run JavaScript on the server.
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    );
};

export default PDFFile;