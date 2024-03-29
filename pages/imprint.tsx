import { NextPage } from 'next';
import NotFoundPage from './404';

export const Imprint: NextPage = () => <NotFoundPage />;

// export const Imprint: NextPage = () => (
//   <PageLayout>
//     <VStack spacing="8">
//       <Heading as="h1" size="2xl" m="2">
//         Impressum
//       </Heading>
//       <VStack spacing="0">
//         <Heading m="2">Angaben gemäß § 5 TMG</Heading>
//         {/* FIXME: update address */}
//         <Text>Max Friedrich</Text>
//         <Text>Michaelisstraße 18c</Text>
//         <Text>64293 Darmstadt</Text>
//       </VStack>

//       <VStack>
//         <Heading>Kontakt</Heading>
//         <HStack h="8">
//           <Text>E-Mail:</Text>
//           <HiddenEmail />
//         </HStack>
//       </VStack>

//       <Heading>Haftung für Inhalte</Heading>
//       <Text>
//         Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
//         den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
//         jedoch nicht, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
//         Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
//       </Text>
//       <Text>
//         Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
//         allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
//         ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
//         von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
//       </Text>

//       <Heading>Haftung für Links</Heading>
//       <Text>
//         Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
//         Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
//         Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
//         Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
//         mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
//         nicht erkennbar.
//       </Text>
//       <Text>
//         Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
//         Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
//         Rechtsverletzungen werden wir derartige Links umgehend entfernen.
//       </Text>

//       <Heading>Urheberrecht</Heading>
//       <Text>
//         Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
//         deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
//         Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
//         des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
//         privaten, nicht kommerziellen Gebrauch gestattet.
//       </Text>
//       <Text>
//         Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
//         Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
//         gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
//         bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
//         wir derartige Inhalte umgehend entfernen.
//       </Text>

//       <HStack pb="40">
//         <Text>Quelle:</Text>
//         <Link href="https://www.e-recht24.de/impressum-generator.html">
//           https://www.e-recht24.de/impressum-generator.html
//         </Link>
//       </HStack>
//     </VStack>
//   </PageLayout>
// );

export default Imprint;
