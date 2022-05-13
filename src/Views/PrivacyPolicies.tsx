import * as React from 'react';
import { Container, Box, Typography, Link, Grid } from "@mui/material";

import Footer from "../Components/Home/Footer/Footer";
import { useTheme } from '@mui/material';
import Rocket from '../Components/AboutUs/Img/rocket.png';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Careers(){

    const theme = useTheme();
    
    return(
        <Box sx={{width: '100%', padding: '0'}}>            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",               
                    
                }}>
                    <Container component="main" sx={{ mt: 8, mb: 2 }}>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center",}}>
                    <img src={Rocket} alt="" height= "60em" width= "60em" />
                    <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h2" component="h1" gutterBottom display='flex' justifyContent='center'>
                    Política de privacidad.
                    </Typography>
                    <img src={Rocket} alt="" height= "60em" width= "60em" />
                    </Box>

                        <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                            <Typography variant="body2" color="rgb(255, 255, 1)">
                            La privacidad y resguardo de la información personal de los usuarios del Sitio Web -según este término se define abajo- y alumnos de Henry Tecnología S.A.S. y Henry Technologies Inc. (en adelante, conjunta e indistintamente, “HENRY”) son una prioridad de HENRY.<br/>

                            El presente documento contiene la Política de Privacidad (la “Política de Privacidad”) de HENRY que se aplicará para el tratamiento de datos personales de que quienes accedan al sitio web www.soyhenry.com (en adelante el "Sitio Web") y/o que califiquen como alumnos de HENRY -según ese término se define en el Reglamento de Estudios de HENRY- (los “Usuarios”, y junto con “HENRY”, las “Partes”).<br/>

                            Es muy importante que conozcas y comprendas esta Política de Privacidad porque la misma será aplicable sobre el uso del Sitio Web y sobre todos los servicios que puedas contratar y programas de estudio a los que puedas acceder por esos medios con HENRY (los “Servicios”). Esta Política de Privacidad es un documento anexo y complementario a los Términos y Condiciones de www.soyhenry.com, y mediante su aceptación, se constituye un contrato válido y vinculante entre las Partes.<br/>

                            Como Usuario tomás conocimiento y aceptás irrevocablemente que al acceder a los Servicios previamente leíste y aceptaste esta Política de Privacidad -como así también los Términos y Condiciones- en su totalidad. Es decir, que al contratar los Servicios quedás obligado al estricto cumplimiento de los mismos.<br/>

                            Si no estás de acuerdo con parte o toda esta Política de Privacidad y los Términos y Condiciones debés abstenerse de ingresar al Sitio Web y/o contratar cualquiera de los Servicios que ofrece HENRY.<br/>

                            Por cualquier duda o asunto vinculado a esta Política de Privacidad, podés contactarnos en la siguiente dirección: contacto@soyhenry.com<br/>

                            Asimismo, te informamos que la “Agencia de Acceso a la Información Pública” (AAIP) tiene la atribución de atender las denuncias y reclamos de los Usuarios con relación al incumplimiento de las normas sobre protección de datos personales.<br/>
                            </Typography>

                            
                                    {/* ---------------------1-------------------- */}
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                1) Información a los titulares.
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                            1.1 Toda la información vertida en la aplicación y sus formularios, se almacena y procesa en la base de datos de Henry Tecnologia S.A.S. C.U.I.T. 30-71667218-9, con domicilio en Mansilla General 2513, 2do A , de la Ciudad Autónoma de Buenos Aires.<br/>

                                            1.2 Henry deja constancia que toda la información requerida al momento de completar su información en el formulario de la aplicación, es de carácter obligatorio y que no se solicita ni almacena información sensible de los postulantes, de conformidad con lo dispuesto por el Art. 7° de la Ley 25.326 de Protección de los Datos Personales.<br/>

                                            1.3 Toda la información solicitada por Henry y suministrada por el usuario, se requiere, trata y almacena a los efectos de (1) evaluar el perfil crediticio de los postulantes y, de corresponder, formular un ofrecimiento crediticio; (2) establecer contacto con los postulantes; (3), enviar información, promociones, publicidad y cualquier otra información que Henry considerare pertinente y relevante para el usuario ya sea que ésta fuera relativa al sitio, los productos y servicios ofrecidos y/o las entidades otorgantes, conforme el punto 2.6 de los Términos y condiciones generales del sitio.<br/>

                                            1.4 Toda la información suministrada por los usuarios puede ser compartida por Henry con aquellos Bancos y Entidades no financieras que efectivamente realicen el desembolso del capital solicitado y el usuario autoriza que esos terceros la recolectan, trate y almacene con fines análogos a los enumerados en el punto 1.3. Henry no se hace responsable por los daños y perjuicios ni ninguna otra consecuencia que pudiera derivarse del almacenamiento y tratamiento de la información que hicieran los terceros autorizados.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                                    {/* ---------------------2-------------------- */}

                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                2) Seguridad de la información.
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        2.1 Henry adopta en su sitio www.soyhenry.com las medidas de seguridad standard de la industria, protegiendo la información con tecnología SSL, para garantizar la seguridad y confidencialidad de los datos personales, de modo de evitar su adulteración, pérdida, consulta o tratamiento no autorizado, todo ello de conformidad con lo requerido por la Ley 25.326 en su artículo 9°.<br/>

                                        2.2 Henry no asume responsabilidad ni estará sujeta a reclamos de ninguna índole cuando las violaciones a la seguridad garantizadas en el punto 2.1 se hubieran originado por fallas, intencionales o no, en el extremo del usuario ya sea que éstas provengan de su acción humana o la de terceros o el medio técnico utilizado por él.<br/>

                                        2.3 Henry se compromete a no compartir la información suministrada por el usuario con terceros que no proporcionen niveles de seguridad adecuados para su almacenamiento y tratamiento.<br/>

                                        2.4 Las medidas de seguridad garantizadas en el presente apartado, sólo lo hacen en relación al uso de la web www.soyhenry.com y Henry no se hace responsable por el uso de datos de otros dominios ya sea que el usuario haya accedido directamente o a través de links y/o hipervínculos que pudieran encontrar en la web de Henry.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                                    {/* ---------------------3-------------------- */}

                                    <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                3) Derechos de los titulares.
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        3.1 El usuario podrá solicitar el acceso a la información que, a su nombre, conste en nuestra base de datos. Éste derecho sólo puede ser ejercido de forma gratuita, en intervalos no menores a seis meses (conforme lo normado por el art.14 de la Ley 25.326).<br/>

                                        3.2 El usuario podrá solicitar en cualquier momento, la actualización, rectificación o supresión de la información personal que sobre él conste en la base de datos de Henry, de acuerdo a los procedimientos establecidos en la ley vigente.<br/>

                                        3.3 A los efectos del ejercicio de los derechos enunciados en 3.1 y 3.2 el usuario deberá escribir un correo electrónico a contacto@soyhenry.com en el que deberá (1) indicar sus datos identificativos a efectos de ser informado o (2) detallar cuál es la información que debe ser actualizada, rectificada y/o suprimida y, en caso de corresponder, acompañando la documentación respaldatoria.<br/>

                                        3.4 La agencia de acceso a la información pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de datos personales.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                                    {/* ---------------------4-------------------- */}

                                    <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                4) Obligaciones de los titulares.
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        4.1 El usuario garantiza que toda la información suministrada ya sea a través de la plataforma o a los asesores financieros de Henry es propia, veraz, exacta, auténtica y se encuentra vigente. Consecuentemente, asume la responsabilidad de informar a Henry cualquier modificación en ella.<br/>

                                        4.2 En caso de que al enviar su postulación, el usuario propusiera un co-deudor para tomar el crédito conjuntamente, toda la información personal referida a éste, deberá ser garantizada en los mismos términos que lo dispuesto en el punto 4.1. Asimismo, el usuario declara bajo juramento que el titular de la información enviada ha prestado el consentimiento de que ésta sea recolectada, almacenada y tratada por Henry del modo y a los efectos especificados en el presente documento.<br/>

                                        4.3 El usuario asume absoluta e irrevocablemente la responsabilidad por los daños y perjuicios y toda otra consecuencia legal y jurídica que por el incumplimiento de las garantías de 4.1 y 4.2 pudiere causar a Henry y/o a terceros ya sea que se trate de la información propia o de terceros que hubiera suministrado.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>        
                                    {/* ---------------------5-------------------- */}

                                    <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                5) Transmisión de información a terceros.
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        5.1 HENRY no lucra de ningún modo con la información personal suministrada por los Usuarios, es decir que no la alquila, vende ni ofrece de ningún modo a terceros.<br/>

                                        5.2. Sin perjuicio de lo dispuesto en el punto 5.1., el Usuario consiente que su información personal podrá ser revelada ycompartida con:<br/>
                                        Aquellas autoridades administrativas y/o judiciales que en el ejercicio de su competencia requieran información de HENRY;<br/>
                                        Las entidades mencionadas en el punto 1.4 de la presente Política de Privacidad;<br/>
                                        Colaboradores, proveedores de servicios o empresas conquienes HENRY acuerde una relación de colaboración o alianza para facilitar o mejorar los servicios prestados (incluyendo, sin limitarse a, intermediarios en la gestión de pagos y empresasde ranking crediticio). En este sentido, se aclara que HENRY cuenta con un número de colaboradores, proveedores y socios de negocios que realizan funciones fundamentales como parte de sus operaciones, incluyendo administradores de la plataforma, profesores de los Programas de Estudios,administradores de préstamos de cualquier especie y de losservicios en general, agencias de crédito, agencias de cobro,proveedores de servicios de diversas funcionalidades necesarias para la prestación de los Servicios, agentes de control de calidad, y empresas que distribuyen sus e-mails o recogen información de sus clientes para su estudio.<br/>
                                        Bureaus de crédito o compañías de análisis de riesgo, para usarla con fines estadísticos, de control, de supervisión y/o comerciales así como para reportar el cumplimiento de las obligaciones derivadas del contrato con HENRY a bancos,asociaciones bancarias y/o financieras del país y a cualquier otra organización que mantenga bases de datos con estos fines.<br/>
                                        Aliados comerciales y empresas empleadoras, con la finalidad de general oportunidades laborales para los Usuarios de HENRY;<br/>
                                        Sociedades que pertenezcan al grupo corporativo de HENRY, y que operan bajo las mismas políticas internas, ya sean sociedades controladas, controlantes o afiliadas con HENRY con el efecto de facilitar la gestión de los servicios ofrecidos;<br/>

                                        5.3. HENRY podrá recolectar, almacenar, tratar y compartir la información obrante en su base de datos, de manera absolutamente anónima a los efectos de (1) desarrollar estudios internos sobre los intereses, comportamiento y demografía de los postulantes; (2)Mejorar, orientar y enviar promociones, anunciantes y convenios comerciales; Los fines de uso de la información enumerados en elpresente punto no son taxativos y HENRY podrá utilizar la información para cualquier otro fin análogo o similar, garantizando que ésta siempre será tratada y transmitida de forma anónima e impidiendo la identificación del titular. El usuario podrá oponerse aque su información sea utilizada con estos fines, a tal efecto deberá enviar un correo electrónico a contacto@soyhenry.com<br/>

                                        5.4. En los casos que HENRY divulgue información personal según el punto 5.2, dichos proveedores y socios comerciales pueden almacenar la misma dentro de sus propios sistemas para cumplir con todas sus obligaciones, sean legales o de otro tipo. Asimismo, en HENRY requerimos a nuestros proveedores de servicios y socios comerciales que procesan información personal que reconozcan la confidencialidad de la misma y se comprometan a respetar el derecho a la privacidad de nuestros usuarios, cumpliendo con todas las leyes de privacidad y protección de datos que puedan resultar aplicables, así como con esta Política de Privacidad.<br/>

                                        5.5. HENRY nunca compartirá información con terceros distintos a los mencionados en el punto 5.2. sin antes solicitar el consentimiento previo y expreso del Usuario, salvo que exista una obligación legal que permita realizarlo sin ese consentimiento.<br/>

                                        5.6. Proveer los Servicios requiere el soporte de una infraestructura tecnológica -como servidores y servicios en la nube- que pueden ser propios o provistos por terceros, pudiendo parte de esa infraestructura estar localizada en un país diferente al del Usuario.Cualquiera fuera el escenario, el Usuario expresamente consienteque su Información Personal podrá ser transferida a terceros,inclusive a favor de terceros radicados en otras jurisdicciones, con el propósito de su recolección y/o almacenamiento. En consonancia,también podría suceder que los destinatarios descritos en el 5.2. del presente, se encuentren en un país distinto. Puede que los países receptores de los datos que transferimos no ofrezcan niveles adecuados de protección de datos personales, conforme la Ley de Protección de Datos Personales N° 25.326 de la República Argentina y/o cualquier otra normativa que pudiera resultar aplicable. Por lo tanto, en el caso de transferir tu Información Personal a países que no posean legislación adecuada en materia de protección de Datos Personales, tomaremos medidas para asegurar que tus derechos de privacidad sigan siendo protegidos según lo estipulado en esta Política de Privacidad. Para realizar estas transferencias utilizaremos las cláusulas modelo establecidas en la Disposición 60/2016 emitida por la AAIP.<br/>

                                        5.7. Si HENRY vendiera, cediera o transmitiera de cualquier modo la totalidad o parte de sus activos, podrá en ese caso divulgar a aquellos que los recibieron, toda la información que el usuario hubiera aportado, ya sea a través del sitio www.soyhenry.com o posteriormente a nuestros asesores financieros. Al navegar por el sitio y/o utilizar el simulador y/o enviar los formularios de postulación y/o enviar su información personal o de terceros anuestros asesores, el Usuario consiente expresamente lo dispuesto en éste punto.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>        
                                    {/* ---------------------6-------------------- */}

                                    <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography color={theme.palette.getContrastText(theme.palette.background.default)} variant="h5" component="h4" gutterBottom display='flex' justifyContent='center'>
                                6) Modificación de las Políticas de Privacidad.
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Box sx={{ marginBottom: "1rem", height: "100%", width: "100%", backgroundColor: "black", color: "rgb(255, 255, 1)", fontWeight: "bold", padding: "1em", borderRadius: "1em"}}>
                                        <Typography variant="body2" color="rgb(255, 255, 1)">
                                        6.1 Henry se reserva el derecho de modificar las presentes Políticas de Privacidad, en cualquier momento ya sea para ajustarlas al giro comercial de la sociedad, nuevos requerimientos legales, técnicos, tecnológicos y toda otra circunstancia que a criterio de Henry, amerite su actualización. El cambio será anunciado en el sitio con suficiente antelación. El uso continuado del sitio y los servicios que contiene, luego de su modificación, importará el consentimiento del usuario a las nuevas disposiciones.<br/>
                                        Fecha de actualización: 11 / 06 / 2021.<br/>
                                        </Typography>
                                    </Box>
                                </AccordionDetails>
                            </Accordion> 
                            </Box>       
                    </Container>
                    
            </Box>
        </Box>
    )}