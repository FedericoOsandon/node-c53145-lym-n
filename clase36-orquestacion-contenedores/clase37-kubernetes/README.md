<!-- crear una imágen -->
- docker build -t usercreator1 . 

<!-- ejecutar el contenedor, desde docker destokp -->
<!-- - docker run -d -p 8080:8080 --name usercreator1 usercreator1 -->

<!-- renombrar la imagen para subirla -->
- docker tag usercreators1 defe014/usercreators1:1.0.0

subir la imagen a docker hub
- docker push defe014/usercreators1:1.0.0



<!-- instalar kubectl -->
- curl.exe -LO https://dl.k8s.io/release/v1.25.0/bin/windows/amd64/kubectl.exe

<!-- Probar si tenemos kubectl instalado -->
kubectl version --short (deprecado --short)

- Descargar minikube e instalar. 

<!-- correr minikube -->
miniKube start

<!-- una vez teniendo kubectl y minikube -->
<!-- para ver el estado de kubectl -->
kubectl cluster-info

kubectl config get-contexts

<!-- para ver los pods -->
kubectl get pods

<!-- ejecutar con los pods segun configuración( balanceador de carga) -->

kubectl apply -f kubeusers.yaml

<!-- para ver los deploy -->
kubectl get deployments

<!-- para ver los servicios -->
kubectl get services

<!-- listado de servicios -->
minikube service list

<!-- ejectuar el servicio con minikube -->
minikube service kubeservice1




El manejo de "rollout updates" (implementación de actualizaciones escalonadas) en la orquestación se refiere a la estrategia 
utilizada para desplegar y actualizar aplicaciones de forma gradual en un entorno de orquestación, como por ejemplo, 
un clúster de contenedores.

La implementación de actualizaciones escalonadas es beneficiosa para garantizar la estabilidad 
y la disponibilidad de la aplicación durante el proceso de actualización, minimizando el impacto en los usuarios finales y 
reduciendo el riesgo de interrupciones significativas.

A continuación, te mencionaré algunos conceptos y estrategias comunes utilizados para el manejo de rollout updates en la orquestación:

Despliegue gradual: En lugar de actualizar todos los componentes o instancias de la aplicación a la vez, se realiza la actualización en pequeños lotes o en una secuencia específica. Esto permite que cada lote se pruebe y se monitoree antes de continuar con el siguiente, 
lo que ayuda a identificar posibles problemas y minimiza su impacto.

Canary deployments: Esta estrategia implica desplegar la nueva versión de la aplicación en un subconjunto reducido de nodos o instancias, conocidos como "canaries". Estas instancias son monitoreadas de cerca y se utilizan para evaluar el rendimiento y 
la estabilidad de la nueva versión. Si los canaries demuestran un buen rendimiento, 
la actualización se expande a más nodos o instancias.

Blue-Green deployments: Esta estrategia implica tener dos entornos completos, uno denominado "blue" (azul) y otro "green" (verde). En un principio, la versión actual de la aplicación se ejecuta en el entorno "blue" y, 
una vez que la nueva versión ha sido desplegada y probada en el entorno "green", 
el enrutamiento del tráfico se cambia para dirigirlo al entorno "green". Esto permite un cambio rápido y 
seguro entre las versiones de la aplicación.

A/B testing: En esta estrategia, se divide el tráfico entre dos versiones diferentes de la aplicación, 
conocidas como versión "A" y versión "B". Los usuarios se redirigen a una u otra versión de forma aleatoria, 
y se recopilan datos y métricas para comparar el rendimiento y las características de cada versión. 
Esto permite evaluar el impacto de la nueva versión antes de realizar una implementación completa.

Estas son solo algunas de las estrategias comunes utilizadas para el manejo de rollout updates en la orquestación. 
Cada estrategia tiene sus propias ventajas y desventajas, y la elección de la estrategia adecuada dependerá de las necesidades y
requisitos específicos de tu aplicación y entorno. Es importante planificar cuidadosamente y probar las actualizaciones antes de implementarlas en producción para garantizar un proceso de actualización suave y sin problemas.